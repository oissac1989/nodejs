import fastify from "fastify";
import fastafySwagger from '@fastify/swagger';
import fastafySwaggerUI from '@fastify/swagger-ui';
import { ZodTypeProvider, jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createEvent } from "./routes/create_event";
import { registerForEvent } from "./routes/register_for_events";
import { getEvent } from "./routes/get_event";
import { getAttendeeBadge } from "./routes/get_attendee_badge";
import { checkIn } from "./routes/check_in";
import { getEventAttendees } from "./routes/get_event_attendees";
import { errorHandler } from "./error_handler";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: '*',
})

app.register(fastafySwagger, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'server_node',
            description: 'Projeto NodeJs com a finalidade de aprendizado da tecnologia.',
            version: '1.0.0'
        },
    },
    transform: jsonSchemaTransform,
})

app.register(fastafySwaggerUI, {
    routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)

app.setErrorHandler(errorHandler)

app.listen({ port: 3333, host: '0.0.0.0'}).then(() => {
    console.log('HTTP server running!')
})