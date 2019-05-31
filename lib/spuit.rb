require "sass"
require "spuit/generator"

module Spuit
  if defined?(Rails) && defined?(Rails::Engine)
    class Engine < ::Rails::Engine
      config.assets.paths << File.expand_path("../../scss", __FILE__)
    end
  else
    Sass.load_paths << File.expand_path("../../scss", __FILE__)
  end
end
