import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async (fastify: FastifyInstance) => {
  fastify.get(
    "/health-check",
    {
      config: {
        rateLimit: {
          max: 3,
          timeWindow: "1 minute",
        },
      },
    },
    async (_request: FastifyRequest, reply: FastifyReply) => {
      try {
        reply.status(200).send({
          status: 200,
          message: "health check is ok :)",
          data: {},
        });
      } catch (e) {
        reply.status(500).send({
          status: 500,
          message: "health check is nok :(",
          data: {},
        });
      }
    }
  );
};
