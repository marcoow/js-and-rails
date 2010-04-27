class ControlsController < ApplicationController

  def index
  end

  def replace
    respond_to do |format|
      format.js { render :partial => 'new_content' }
    end
  end

end
