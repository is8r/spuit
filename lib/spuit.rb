
# CodeKit needs relative paths
dir = File.dirname(__FILE__)
$LOAD_PATH.unshift dir unless $LOAD_PATH.include?(dir)

require "spuit/generator"
require "spuit/version"
require 'sass'
require 'spuit'

unless defined?(Sass)
  require 'sass'
end

module Spuit
  @components ||= []
  class << self
    attr_accessor :components

    def load_paths
      components.flat_map(&:load_paths)
    end
  end

  if defined?(Rails) && defined?(Rails::Engine)
    class Engine < ::Rails::Engine
      require 'spuit/engine'
    end

    module Rails
      class Railtie < ::Rails::Railtie
        rake_tasks do
          load "tasks/install.rake"
        end
      end
    end
  else
    spuit_path = File.expand_path("../../scss", __FILE__)
    ENV["SASS_PATH"] = [ENV["SASS_PATH"], spuit_path].compact.join(File::PATH_SEPARATOR)
  end
end
