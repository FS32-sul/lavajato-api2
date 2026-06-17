const { PrismaClient } = require("../generated/prisma");

const PRISMACLIENT = new PrismaClient();

module.exports = {
    PRISMACLIENT
}