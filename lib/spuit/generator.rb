require 'spuit/version'
require "fileutils"
require 'thor'

module Spuit
  class Generator < Thor
    map ['-v', '--version'] => :version

    desc 'install', 'Install Spuit into your project'
    method_options :path => :string, :force => :boolean
    def install
      if spuit_files_already_exist? && !options[:force]
        puts "Spuit files already installed, doing nothing."
      else
        install_files
        puts "Spuit files installed to #{install_path}/"
      end
    end

    desc 'update', 'Update Spuit'
    method_options :path => :string
    def update
      if spuit_files_already_exist?
        remove_spuit_directory
        install_files
        puts "Spuit files updated."
      else
        puts "No existing spuit installation. Doing nothing."
      end
    end

    desc 'version', 'Show Spuit version'
    def version
      say "Spuit #{Spuit::VERSION}"
    end

    private

    def spuit_files_already_exist?
      install_path.exist?
    end

    def install_path
      @install_path ||= if options[:path]
          Pathname.new(File.join(options[:path], 'spuit'))
        else
          Pathname.new('spuit')
        end
    end

    def install_files
      make_install_directory
      copy_in_scss_files
    end

    def remove_spuit_directory
      FileUtils.rm_rf("spuit")
    end

    def make_install_directory
      FileUtils.mkdir_p(install_path)
    end

    def copy_in_scss_files
      FileUtils.cp_r(all_stylesheets, install_path)
    end

    def all_stylesheets
      Dir["#{stylesheets_directory}/*"]
    end

    def stylesheets_directory
      File.join(top_level_directory, "app", "assets", "stylesheets")
    end

    def top_level_directory
      File.dirname(File.dirname(File.dirname(__FILE__)))
    end
  end
end
