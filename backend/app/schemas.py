from pydantic import BaseModel
from typing import List, Optional

#Schema for an individual item in the menu

class ItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    

class Item(ItemBase):
    id: int
    class Config:
        orm_mode = True

#Schema for creating a new order
class OrderItemCreate(BaseModel):
    item_id: int
    quantity: int

#Schema for an order with items
class OrderCreate(BaseModel):
    customer_name: str
    customer_address: str
    items: List[OrderItemCreate]

class Order(OrderCreate): 
    id: int
    total_price: float
    class Config:
        orm_mode = True
    



