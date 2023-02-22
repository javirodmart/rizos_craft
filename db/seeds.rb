# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding"
20.times do 
   item =  Item.create(
        name: Faker::Commerce.product_name,
        price:Faker::Commerce.price,
        image: Faker::LoremFlickr.image(),
        description: Faker::Quote.famous_last_words
    )
end
User.create(first_name:"Javier",last_name:"Rodriguez",email:"javi@gmail.com",password:"123",password_confirmation:"123",admin:true)
Cart.create(user_id:1, item_id:3)
puts "done seeding"
