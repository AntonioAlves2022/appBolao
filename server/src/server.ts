import Fastify from 'fastify';

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    });

    fastify.get('/home', () =>{
        return {message: 'Under construction'}
    })

    await fastify.listen({port: 3334})
}

bootstrap();