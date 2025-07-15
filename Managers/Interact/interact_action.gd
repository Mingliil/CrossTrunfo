extends Area2D
class_name InteractAction

@onready var player = get_tree().get_first_node_in_group("player")
@onready var action = preload("res://Managers/Interact/interact_label.tscn")
func _on_body_entered(body: Node2D) -> void:
	load(action)
	print(player.position)
	pass # Replace with function body.

func _on_body_exited(body: Node2D) -> void:
	
	print("saiu")
	pass # Replace with function body.
