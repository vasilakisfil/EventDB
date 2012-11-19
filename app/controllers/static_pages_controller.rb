class StaticPagesController < ApplicationController
  respond_to :html, :json

  def home
    @markers = Micropost.all.to_json
    respond_with(@markers)
  end

  def about
  end

  def help
  end

  def contact
  end
end
