import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '',
            title: 'Evento inicial',
            slug: 'event_initial',
            details: 'Evento incial de testes',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log('Database seeded')
    prisma.$disconnect()
})