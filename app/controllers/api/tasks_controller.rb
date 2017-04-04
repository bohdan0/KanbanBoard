class Api::TasksController < ApplicationController
  def index
    @tasks = Task.joins(:list).where(lists: { author: current_user })
  end

  def show
    @task = Task.find(params[:id])

    if @task
      render :show
    else
      render json: ['Not found'], status: 404
    end
  end

  def create
    @task = Task.new(task_params)
    
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update_task(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    render :show
  end

  private
    def task_params
      params.require(:task).permit(:title, :list_id, :resolved, :position)
    end
end
