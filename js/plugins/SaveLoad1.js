if DataManager.load_game(0)
  $game_system.on_after_load
  SceneManager.goto(Scene_Map)
end

DataManager.save_game(0)