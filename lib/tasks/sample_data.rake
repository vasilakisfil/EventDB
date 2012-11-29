namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    User.create!(name: "Example User",
                 email: "example@eventdb.org",
                 username: "exampleuser",
                 password: "foobar",
                 password_confirmation: "foobar")
    admin = User.create!(name: "Filippos Vasilakis",
                         email: "vasilakisfil@gmail.com",
                         password: "foobar",
                         password_confirmation: "foobar")
    admin.toggle!(:admin)
    20.times do |n|
      name  = Faker::Name.name
      email = Faker::Internet.email
      username = "exampleuser#{n+1}"
      password  = "password"
      User.create!(name: name,
                   email: email,
                   username: username,
                   password: password,
                   password_confirmation: password)
    end
    users = User.all(limit: 6)
    5.times do
      title = "The Title"
      users.each { |user| user.microposts.create!(title: title,
                                                 content: Faker::Lorem.sentence(10),
                                                  lat: Faker::Address.latitude,
                                                  lon: Faker::Address.longitude) }
    end
  end
end
