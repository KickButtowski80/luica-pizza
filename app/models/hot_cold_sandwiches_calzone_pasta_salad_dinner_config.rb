require 'yaml'
class HotColdSandwichesCalzonePastaSaladDinnerConfig
    def self.current_menu
        current_menu = load_menu
    end
    def self.load_menu
         YAML.load(File.read("#{Rails.root.to_s}/config/hot_cold_sandwiches_calzone_pasta_salad_dinner.yml"))
    end
end