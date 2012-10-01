require 'spec_helper'

describe "Static pages" do

  describe "Home page" do

    it "should have the h1 'EventDB'" do
      visit root_path
      page.should have_selector('h1', :text => 'EventDB')
    end

    it "should have the title 'EventDB'" do
      visit root_path
      page.should have_selector('title', :text => 'EventDB')
    end

  end

  describe "Help page" do

    it "should have the h1 'Help'" do
      visit help_path
      page.should have_selector('h1', :text => 'Help')
    end

    it "should have the title 'Help'" do
      visit help_path
      page.should have_selector('title',
                        :text => "Help")
    end
  end

  describe "About page" do

    it "should have the h1 'About EventDB'" do
      visit about_path
      page.should have_selector('h1', :text => 'About EventDB')
    end

    it "should have the title 'About EventDB'" do
      visit about_path
      page.should have_selector('title',
                    :text => "About EventDB")
    end
  end

  describe "Contact page" do

    it "should have the h1 'Contact Us'" do
      visit contact_path
      page.should have_selector('h1', text: 'Contact Us')
    end

    it "should have the title 'Contact Us'" do
      visit contact_path
      page.should have_selector('title',
                    text: "Contact Us")
    end
  end
end
