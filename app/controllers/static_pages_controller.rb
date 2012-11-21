class StaticPagesController < ApplicationController
  respond_to :html, :json

  def home
    @markers = User.all.as_json(only: :name, include: { microposts:
                                          { only: [:title, :content, :lat, :lon]}})
    respond_with(@markers)
  end

  def about
  end

  def help
  end

  def contact
  end
end
