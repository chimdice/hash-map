class Node {
    constructor() {
        this.value = null;
        this.link = null;
    };
};

export class LinkList {
    constructor () {
        this.linkList = {};
        this.lastPosition = null
        this.firstEmpty = true
    };

    append (value) {
        if (this.firstEmpty) {
            const node = new Node();
            node.value = value;
            this.linkList.link = node;
            this.firstEmpty = false
        } else {
            let tempList = this.linkList.link;

            while (tempList.link != null) {
                tempList = tempList.link;
            };

            const node = new Node();
            node.value = value;
            tempList.link = node;
        };
    };

    prepend (value) {
        if (this.firstEmpty) {
            const node = new Node()
            node.value = value;
            this.linkList.link = node;
            this.firstEmpty = false;
        } else {
            const node = new Node();
            node.value = value;
            node.link = this.linkList.link;
            this.linkList.link = node;
        };
    };

    size () {
        let size = 0;
        let tempList = this.linkList.link;

        if (typeof tempList === 'undefined') {
            return size;
        }

        while (! (tempList.link === null)) {
            tempList = tempList.link;
            size += 1;
        };

        size += 1;
        return size
    };

    head () {
        return this.linkList.link;
    };

    tail () {
        let tempList = this.linkList.link;

        if ((typeof tempList === 'undefined')||(tempList === null)) {
            return;
        }

        while (! (tempList.link === null)) {
            tempList = tempList.link;
        };

        return tempList;
    };

    at (index) {
        let loc = 0;
        let tempList = this.linkList.link;

        while (loc < index) {
            if (tempList.link === null) {
                return "Index out of Range";
            } else {
                tempList = tempList.link;
            };

            loc += 1
        };

        return tempList;
    };

    pop () {
        let tempList = this.linkList.link;
        let parentList = this.linkList;
        
        if ((typeof tempList === 'undefined')||(tempList === null)) {
            return;
        };

        while (! (tempList.link === null)) {
            tempList = tempList.link;
            parentList = parentList.link;
        };

        delete parentList.link;
        parentList.link = null;
    };

    contains (value) {
        let tempList = this.linkList.link;
        let inList = false

        if ((typeof tempList === 'undefined')||(tempList === null)) {
            return inList;
        }

        while (! inList) {
            if (tempList.value === value) {
                inList = true;
            } else if (tempList.link === null) {
                break;
            } else {
                tempList = tempList.link;
            };
        };

        return inList;
    };


    find (value) {
        let tempList = this.linkList.link;
        let inList = false
        let valueIndex = 0;

        if ((typeof tempList === 'undefined')||(tempList === null)) {
            return null;
        }

        while (! inList) {
            if (tempList.value === value) {
                inList = true;
            } else if (tempList.link === null) {
                break;
            } else {
                tempList = tempList.link;
                valueIndex += 1;
            };
        };

        if (inList) {
            return valueIndex;
        } else {
            return null
        }
    };

    toString () {
        let finalString = '';

        let tempList = this.linkList.link;

        if ((typeof tempList === 'undefined')||(tempList === null)) {
            return finalString;
        }

        while (! (tempList.link === null)) {
            finalString += `(${tempList.value}) ->`
            tempList = tempList.link;
        };

        finalString += `(${tempList.value}) -> null`

        return finalString;
    };

    insertAt(value, index) {
        let loc = this.size();

        if ((index < 0) || (index > loc) ) {
            return "Index out of Range";
        } else if (index === 0) {
            this.prepend(value);
        } else if (index === loc){
            this.append(value);
        } else {
            let tempList = this.linkList.link;
            let newlist = new Node();
            let tempListNew = newlist;

            for (let i=0; i<loc; i++) {
                if (i === index){
                    const node = new Node()
                    node.value = value;
                    tempListNew.link = node;
                    tempListNew = tempListNew.link
                }

                if (i === 0) {
                    tempListNew.value = tempList.value;
                    tempList = tempList.link;
                } else {
                    const node = new Node();
                    node.value = tempList.value;
                    tempListNew.link = node;
                    tempList = tempList.link;
                    tempListNew = tempListNew.link
                }
                
            };
    
            this.linkList.link = newlist;
        };
    };

    removeAt(index) {
        let loc = this.size();

        if ((index < 0) || (index > loc-1) ) {
            return "Index out of Range";
        } else if (index === loc-1) {
            this.pop();
        } else {
            let tempList = this.linkList.link;
            let newlist = new Node();
            let tempListNew = newlist;
            let start = true;

            for (let i=0; i<loc; i++) {
                if (! (i === index)){
                   if (start) {
                        tempListNew.value = tempList.value;
                        console.log(tempList.value)
                        tempList = tempList.link;
                        start = false;
                    } else {
                        const node = new Node();
                        node.value = tempList.value;
                        console.log(tempList.value)
                        tempListNew.link = node;
                        tempList = tempList.link;
                        tempListNew = tempListNew.link
                    };
                } else {
                    tempList = tempList.link;
                };
            };

            this.linkList.link = newlist;
        };
    };
};

