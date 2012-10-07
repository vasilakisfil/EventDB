FactoryGirl.define do
  factory :user do
    name "example TheExample"
    email "example@example.com"
    username "The Dude"
    password "foobar"
    password_confirmation "foobar"
  end
end
