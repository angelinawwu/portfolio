function SmoothVar(value, min, max){
    this.value = value
    this.min = min
    this.max = max
    this.target = value

    let self = this
    
    this.set = function(value){
        self.target = Math.max(self.min, value)
        self.target = Math.min(self.max, self.target)
    }

    this.add = function(delta){
        self.set(self.target + delta)
    }

    this.update = function(){
        self.value += (self.target - self.value) * 0.2
    }
}

export {SmoothVar}