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
    99.times do |n|
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
  end
end
