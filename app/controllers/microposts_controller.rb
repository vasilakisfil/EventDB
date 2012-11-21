class MicropostsController < ApplicationController
  before_filter :signed_in_user, only: [:create, :destroy]
  before_filter :correct_user, only: :destroy
  respond_to :html, :json

  def create
    @micropost = current_user.microposts.build(params[:micropost])
    if @micropost.save
      flash[:success] = "Micropost created!"
      redirect_to user_path(current_user)
    else
      @user = User.find(current_user)
      @microposts = @user.microposts.paginate(page: params[:page])
      #flash.now[:errors] = @micropost.errors.full_messages
      render 'users/show'
      #redirect_to user_path(current_user)
    end
  end

  def destroy
    @micropost.destroy
    redirect_to root_url
  end

  def show
    @micropost = Micropost.find(params[:id])
    @micropost_json = @micropost.as_json(include: { user: { only: :name }})
    respond_with(@micropost_json)
  end

  private

    def correct_user
      @micropost = current_user.microposts.find_by_id(params[:id])
      redirect_to root_url if @micropost.nil?
    end
end
