ActionController::Routing::Routes.draw do |map|

  map.with_options :controller => 'classic_solution' do |map|
    map.classic_solution_index   '/classic_solution',         :action => 'index'
    map.classic_solution_replace '/classic_solution/replace', :action => 'replace', :conditions => { :method => :post }
  end

  map.with_options :controller => 'full_separation' do |map|
    map.full_separation_index   '/full_separation',         :action => 'index'
    map.full_separation_replace '/full_separation/replace', :action => 'replace', :conditions => { :method => :post }
  end

  map.with_options :controller => 'controls' do |map|
    map.controls_index   '/controls',         :action => 'index'
    map.controls_replace '/controls/replace', :action => 'replace', :conditions => { :method => :post }
  end

  map.root :controller => 'home', :action => 'index'

end
