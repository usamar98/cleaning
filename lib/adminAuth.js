import crypto from "node:crypto";

export const ADMIN_COOKIE_NAME = "blackburn_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 12;

function sessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "blackburn-cleaning-services-local-session-secret";
}

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || "Black@BurnServices1092";
}

function sign(value) {
  return crypto.createHmac("sha256", sessionSecret()).update(value).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

export function passwordMatches(password) {
  if (typeof password !== "string") return false;
  return safeEqual(password, adminPassword());
}

export function createAdminSessionCookie() {
  const expiresAt = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `admin.${expiresAt}`;
  const value = `${payload}.${sign(payload)}`;

  return {
    name: ADMIN_COOKIE_NAME,
    value,
    options: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_MAX_AGE
    }
  };
}

export function expiredAdminSessionCookie() {
  return {
    name: ADMIN_COOKIE_NAME,
    value: "",
    options: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0
    }
  };
}

export function isAdminSessionValue(value) {
  if (!value || typeof value !== "string") return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [role, expiresAt, signature] = parts;
  if (role !== "admin") return false;
  if (!expiresAt || Number(expiresAt) < Date.now()) return false;

  return safeEqual(signature, sign(`${role}.${expiresAt}`));
}

export function isAdminRequest(request) {
  return isAdminSessionValue(request.cookies.get(ADMIN_COOKIE_NAME)?.value);
}
