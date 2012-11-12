# == Schema Information
#
# Table name: microposts
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  content    :string(255)
#  lat        :decimal(15, 12)
#  lon        :decimal(15, 12)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'spec_helper'

describe Micropost do

  let(:lat) { 38.174268 }
  let(:lon) { 23.920213 }
  let(:user) { FactoryGirl.create(:user) }
  before do
    @micropost = user.microposts.build(title: "The title",
                                        content: "Lorem ipsum",
                                        lat: lat, lon: lon)
  end

  subject { @micropost }

  it { should respond_to(:title) }
  it { should respond_to(:content) }
  it { should respond_to(:lon) }
  it { should respond_to(:lat) }
  it { should respond_to(:user_id) }
  its(:user) { should == user }

  it { should be_valid }

  describe "when title is not present" do
    before { @micropost.title = nil }
    it { should_not be_valid }
  end

  describe "when latitude is not present" do
    before { @micropost.lat = nil }
    it { should_not be_valid }
  end

  describe "when longitude is not present" do
    before { @micropost.lon = nil }
    it { should_not be_valid }
  end

  describe "when user_id is not present" do
    before { @micropost.user_id = nil }
    it { should_not be_valid }
  end

  describe "with blank title" do
    before { @micropost.title = " " }
    it { should_not be_valid }
  end

  describe "with blank content" do
    before { @micropost.content = " " }
    it { should be_valid }
  end

  describe "with title that is too long" do
    before { @micropost.title = "a" * 21}
    it { should_not be_valid }
  end

  describe "with content that is too long" do
    before { @micropost.content = "a" * 201}
    it { should_not be_valid }
  end

  describe "with latitude out of bounds" do
    before { @micropost.lat = 91.123 }
    it { should_not be_valid }
  end

  describe "with longitude out of bounds" do
    before { @micropost.lon = -181.123 }
    it { should_not be_valid }
  end

  describe "accessible attributes" do
    it "should not allow access to user_id" do
      expect do
        Micropost.new(user_id: user.id)
      end.to raise_error(ActiveModel::MassAssignmentSecurity::Error)
    end
  end

end
