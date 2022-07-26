class Person:
    def __init__(self,name) -> None:
        self.name = name
    
class Life:
    def __init__(self) -> None:
        self.me = Person("Thinh")
    def life(self):
        while self.me:
            while self.me.feelLike("ImposterSyndrome") is True:
                self.me.talkWithOthers()
                self.me.stopComparing()
                self.me.stopDoubtingMySelf()
                self.me.stopThinking()
                self.me.listenToMusic()
                self.me.listenToPodcast()
        self.me.believeInMySelf()
        self.me.keepMoving()