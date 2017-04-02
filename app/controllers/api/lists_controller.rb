class Api::ListsController < ApplicationController
  def index
    @lists = List.where(author: current_user).includes(:tasks)
  end

  def show
    @list = List.includes(:tasks).find(params[:id])

    if @list
      render :show
    else
      render json: ['Not found'], status: 404
    end
  end

  def create
    @list = List.new(list_params)
    @list.author = current_user
    
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy

    render :show
  end

  private
    def list_params
      params.require(:list).permit(:title)
    end
end