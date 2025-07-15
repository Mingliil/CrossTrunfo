extends Area2D
class_name InteractAction

@onready var player = get_tree().get_first_node_in_group("player")
@onready var action = preload("res://Managers/Interact/interact_label.tscn")
signal interagivel(acao:bool)
func _on_body_entered(body: Node2D) -> void:
	var action_label = action.instantiate()
	add_child(action_label)
	interagivel.emit(true)

func _on_body_exited(body: Node2D) -> void:
	var action_label = get_tree().get_first_node_in_group("interact")
	remove_child(action_label)
	interagivel.emit(false)
