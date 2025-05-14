from sqlalchemy.orm import Session
from . import models, schemas

# Get all items available in the restaurant
def get_items(db: Session):
    return db.query(models.Item).all()

# Create a new order
def create_order(db: Session, order_data: schemas.OrderCreate):
    total_price = 0
    order_items = []

    # Calculate total price and create order items
    for item_data in order_data.items:
        item = db.query(models.Item).filter(models.Item.id == item_data.item_id).first()
        if item:
            total_price += item.price * item_data.quantity
            order_items.append(models.OrderItem(item_id=item.id, quantity=item_data.quantity))

    # Create the order
    order = models.Order(
        customer_name=order_data.customer_name,
        customer_address=order_data.customer_address,
        total_price=total_price,
        items=order_items
    )
    db.add(order)
    db.commit()
    db.refresh(order)
    return order
