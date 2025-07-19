# defines a class named class
class Animal 

    @@count= 0 # a class variable to keep count of the number of Animal object created
    def initialize(head,tail) # constructor method to initialize head and tail attributes                                                                   
        @head= head # instance variable head assigned
        @tail= tail # instance variable tail assigned
        @@count += 1 # increament class-level, counts everytime Animal is increased 
    end 

    #method to print noding action
    def noding
        puts "animal is noding"
    end  

    # method to print wagging action
    def wagging
        puts "aniaml is wagging"
    end

    # getter method for @head 
    def head
      @head
    end

    # setter method for @head
    def head=(head)
      @head= head
    end
    
    # getter method for @tail
    def tail
        @tail
    end 
    # setter methiod for @tail
    def tail= (tail)
        @tail= tail
    end 
    # class method for counting the number of Animal object created 
    def self.count
        @@count
    end
end
# class Dog that inherits attributes from Animal  
class Dog < Animal
    def initialize(head,tail,eye)
        super(head,tail) # calls Animals initialize method for head and tail
        @eye= eye # sets specific attribute for Dog
    end
    # method to display atributes of Dog
    def info 
        puts "head,#{@head},tail#{@tail},eye#{@eye}"
    end
end
# creates an instance of Animal with 1 head and 1 tail
a = Animal.new(1,1)
# calls the noding method on Animal
a.noding
# creates an instance of Dog with i head and 2 tail
b= Dog.new(1,2)
b.wagging #calls the wagging method on Dog as inherited form Animal