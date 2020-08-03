import dotenv from 'dotenv'

dotenv.config()

export default{
    databaseUrl: process.env.DATABASE_URL || 'mongodb+srv://admin:1qaz@WSX@cluster0.sy4od.mongodb.net/new'
}