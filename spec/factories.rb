FactoryGirl.define do
  factory :user do
    sequence(:name) { |n| "Persion #{n}" }
    sequence(:email) { |n| "person_#{n}@example.com"}
    sequence(:username) { |n| "Dude#{n}" }
    password "foobar"
    password_confirmation "foobar"

    factory :admin do
      admin true
    end
  end

  factory :micropost do
    title "The title"
    content "The content"
    lat { rand(0..1.8)*100 - 90 }
    lon { rand(0..3.60)*100 -180 }
    user
  end
end
