const systemConfig = require("../../config/system");

const authMiddleware = require("../../middlewares/admin/auth.middleware");

const dashboardRoute = require("./dashboard.route");
const courseRoute = require("./course.route");
const categoryRoute = require("./category.route");
const roleRoute = require("./role.route");
const adminRoute = require("./admin.route");
const authRoute = require("./auth.route");
const lessonRoute = require("./lesson.route");

module.exports = (app) => {
  app.use(
    systemConfig.prefixAdmin + `/dashboard`,
    authMiddleware.requireAuth,
    dashboardRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/courses`,
    authMiddleware.requireAuth,
    courseRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/category`,
    authMiddleware.requireAuth,
    categoryRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/role`,
    authMiddleware.requireAuth,
    roleRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/admin`,
    authMiddleware.requireAuth,
    adminRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/lesson`,
    authMiddleware.requireAuth,
    lessonRoute
  );
  app.use(systemConfig.prefixAdmin + `/auth`, authRoute);
};
