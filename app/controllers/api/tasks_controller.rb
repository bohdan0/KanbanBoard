class Api::TasksController < ApplicationController
  def index
    @tasks = Task.where(author: current_user)
  end

  def show
    @task = Task.find(params[:id])

    if @task
      render json: @task.to_json(only: [:id, :title, :list_id, :resolved]), status: 200
    else
      render json: ['Not found'], status: 404
    end
  end

  def create
    @task = Task.new(task_params)
    
    if @task.save
      render json: @task.to_json(only: [:id, :title, :list_id, :resolved]), status: 200
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      render json: @task.to_json(only: [:id, :title, :list_id, :resolved]), status: 200
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    render json: @task.to_json(only: [:id, :title, :list_id, :resolved]), status: 200
  end

  private
    def task_params
      params.require(:task).permit(:title, :list_id, :resolved)
    end
end