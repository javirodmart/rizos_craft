# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding"

User.create(first_name:"Javier",last_name:"Rodriguez",email:"javi@gmail.com",password:"123",password_confirmation:"123",img_url:"http://localhost:4000/static/media/me.ccffe15462f7af55fe8e.png",admin:true)
Item.create(name:"Frida",price:15.00,img_url: "https://images1.novica.net/pictures/27/p421239_2_400.jpg",description:"Cute Frida Earings")
Item.create(name:"Watermelon",price:20.00,img_url: "https://img.ltwebstatic.com/images3_pi/2021/09/24/1632467498422a2280f6ba0e6bc1e69e5e73238c15_thumbnail_600x.webp",description:"Cute Watermelon Earings")
Item.create(name:"Sunflower",price:18.00,img_url: "https://img.ltwebstatic.com/images3_pi/2020/10/15/16027394260fdd32272771f7dc9bcfd8c7a4c77c7a_thumbnail_600x.webp",description:"Cute Sunflower Earings")
Item.create(name:"Lolipop",price:10.00,img_url: "https://img.ltwebstatic.com/images3_pi/2020/08/14/15973755088ffa449b83c6c1cbc7eff55accce5115_thumbnail_600x.webp",description:"Cute Lolipop Earings")
Item.create(name:"Frog",price:30.00,img_url: "https://img.ltwebstatic.com/images3_pi/2022/05/07/1651910162511a79a19cdc54d68a306813c1c823f0_thumbnail_600x.webp",description:"Cute Frog Earings")
Item.create(name:"Avacado",price:15.00,img_url: "https://img.ltwebstatic.com/images3_pi/2022/07/27/1658905387c22f7e91df345d171422fc9ae5367701_thumbnail_600x.webp",description:"Cute Avacado Earings")



puts "done seeding"
