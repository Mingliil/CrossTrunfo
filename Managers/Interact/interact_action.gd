extends Area2D
class_name InteractAction

@onready var player = get_tree().get_first_node_in_group("player")
@onready var action = preload("res://Managers/Interact/interact_label.tscn")
@export var acao:bool = false
signal interagivel(acao_player:bool)
func _on_body_entered(body: Node2D) -> void:
	var action_label = action.instantiate()
	add_child(action_label)
	acao = true
	interagivel.emit(true)

func _on_body_exited(body: Node2D) -> void:
	var action_label = get_tree().get_first_node_in_group("interact")
	remove_child(action_label)
	acao = false
	interagivel.emit(false)

func _process(delta: float) -> void:
	if acao == true:
		Interact_manager._appears("para Interagir")
		if Input.is_action_just_pressed("Interagir"):
			print(player.position)
