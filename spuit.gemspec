# coding: utf-8
$:.push File.expand_path("../lib", __FILE__)
require 'spuit/version'

Gem::Specification.new do |s|
  s.add_development_dependency "aruba", "~> 0.14"
  s.add_development_dependency "css_parser", "~> 1.4"
  s.add_development_dependency "cucumber", "~> 2.0"
  s.add_development_dependency "rake", "~> 11.1"
  s.add_development_dependency "rspec", "~> 3.4"
  s.add_runtime_dependency "sass", "~> 3.4"
  s.add_runtime_dependency "thor", "~> 0.19"

  s.authors = ["is8r"]
  s.description = %q{Sass mixins.}
  s.email = ["ishihara.yu@gmail.com"]
  s.executables = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.files = `git ls-files`.split("\n")
  s.homepage = ""
  s.license = "MIT"
  s.name = "spuit"
  s.platform = Gem::Platform::RUBY
  s.require_paths = ["lib"]
  s.summary = %q{Sass mixins.}
  s.test_files = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.version = Spuit::VERSION
end
