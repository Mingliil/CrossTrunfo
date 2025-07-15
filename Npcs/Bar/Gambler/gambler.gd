extends Node2D
class_name NpcDealer

@export var interact_name: String = "para conversar"

func _ready() -> void:
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_interagivel(acao_player: bool) -> void:
	Interact_manager._appears("")
	pass # Replace with function body.
