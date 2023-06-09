import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  
  const user = await prisma.user.create({
      data: {
        name: 'Christian',
        age: 32,
        email: "raz@raz.com",
        userPreference:{
          create:{
            emailUpdates: true
          }
        }
      }
      //include, select not both ex select: {name: true} brings only the name
    }
    )
    console.log(user)
  }
  
  
  main()
  
    .then(async () => {
  
      await prisma.$disconnect()
  
    })
  
    .catch(async (e) => {
  
      console.error(e)
  
      await prisma.$disconnect()
  
      process.exit(1)
  
    })