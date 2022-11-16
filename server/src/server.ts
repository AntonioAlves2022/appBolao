import Fastify from 'fastify';

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    });

    fastify.get('/home', () =>{
        return {message: 'Under construction'}
    })

    fastify.post('/new_user', () =>{
       const user = {name: 'Antonio', email:'antonio@gmail.com', passwor:'1234'}
       return {user}

    });

    await fastify.listen({port: 3334})
}

bootstrap();