
# CodeKit needs relative paths
dir = File.dirname(__FILE__)
$LOAD_PATH.unshift dir unless $LOAD_PATH.include?(dir)

require "oulu/generator"
require "oulu/version"
require 'sass'
require 'oulu'

unless defined?(Sass)
  require 'sass'
end

module Oulu
  @components ||= []
  class << self
    attr_accessor :components

    def load_paths
      components.flat_map(&:load_paths)
    end
  end

  if defined?(Rails) && defined?(Rails::Engine)
    class Engine < ::Rails::Engine
      require 'oulu/engine'
    end

    module Rails
      class Railtie < ::Rails::Railtie
        rake_tasks do
          load "tasks/install.rake"
        end
      end
    end
  else
    oulu_path = File.expand_path("../../app/assets/stylesheets", __FILE__)
    ENV["SASS_PATH"] = [ENV["SASS_PATH"], oulu_path].compact.join(File::PATH_SEPARATOR)
  end
end
