export default function checkLogin(cookie) {
  if (!cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return undefined;
}
export function isAccessLoginPage(cookie) {
  if (cookie) {
    const referer = "/";
    return {
      redirect: {
        destination: referer,
        permanent: false,
      },
    };
  }
  return undefined;
}
