namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    User.create!(name: "Example User",
                 email: "example@railstutorial.org",
                 username: "exampleuser",
                 password: "foobar",
                 password_confirmation: "foobar")
    admin = User.create!(name: "example user",
                         email: "admin@admin.com",
                         password: "foobar",
                         password_confirmation: "foobar")
    admin.toggle!(:admin)
    20.times do |n|
      name  = Faker::Name.name
      email = "example-#{n+1}@railstutorial.org"
      username = "exampleuser#{n+1}"
      password  = "password"
      User.create!(name: name,
                   email: email,
                   username: username,
                   password: password,
                   password_confirmation: password)
    end
    users = User.all(limit: 6)
    50.times do
      title = "The title"
      lat = rand(0..1.8)*100 - 90
      lon = rand(0..3.60)*100 -180
      content = Faker::Lorem.sentence(5)
      users.each { |user| user.microposts.create!(title: title,
                                                  content: content,
                                                  lat: lat,
                                                  lon: lon) }
    end
  end
end
