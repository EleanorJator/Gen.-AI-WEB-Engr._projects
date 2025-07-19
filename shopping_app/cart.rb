require_relative "item_manager"

class Cart
  include ItemManager
  require_relative "ownable"
  include Ownable

  def initialize(owner)
    self.owner = owner
    @items = []
  end

  def items
    # Cartにとってのitemsは自身の@itemsとしたいため、ItemManagerのitemsメソッドをオーバーライドします。
    # CartインスタンスがItemインスタンスを持つときは、オーナー権限の移譲をさせることなく、自身の@itemsに格納(Cart#add)するだけだからです。
    @items
  end

  def add(item)
    @items << item
  end

  def total_amount
    @items.sum(&:price)
  end

  def check_out(seller)
    return if owner.wallet.balance < total_amount
    owner.wallet.withdraw(total_amount)
    seller.wallet.deposit(total_amount)
    @items.each do|item|
      item.owner= owner
    end 
    @items = []
  end

end
