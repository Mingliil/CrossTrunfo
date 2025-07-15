extends Area2D
class_name InteractAction

@onready var player = get_tree().get_first_node_in_group("player")
@onready var action = preload("res://Managers/Interact/interact_label.tscn")
func _on_body_entered(body: Node2D) -> void:
	var action_label = action.instantiate()
	add_child(action_label)
	#var acao = 
	if Input.is_action_pressed("Interagir"):
		print(player.position)
	
	pass # Replace with function body.

func _on_body_exited(body: Node2D) -> void:
	var action_label = get_tree().get_first_node_in_group("interact")
	remove_child(action_label)
	print("saiu")
	pass # Replace with function body.
