extends CharacterBody2D
class_name PlayerMain
@export var player_speed: float = 100.0
@export var player_health: int = 25
@onready var Player_sprite: Sprite2D = $Sprite2D

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.
	
func _process(delta: float) -> void:
	var direcao = Input.get_vector("Esquerda", "Direita", "Cima", "Baixo")
	position.y += direcao.y*delta*player_speed*2.5
	position.x += direcao.x*delta*player_speed*2.5
	var pulo = Input.is_action_pressed("Pulo")
