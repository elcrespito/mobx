import { action, computed, observable } from 'mobx'

export class Asset {
    @observable public name: string;
    @observable public description: string;
    @observable public budget: number;

    constructor(name: string, description: string, budget: number) {
        this.name = name;
        this.description = description;
        this.budget = budget;
    }

    @computed get descriptionData() {
        if (this.budget > 90 && this.budget < 100) {
            return `Updated ${this.description}`;
        }

        return this.description;
    }

    @action public setBudget(budget: number) {
        this.budget = budget;
    }

    @action public inc() {
        this.setBudget(this.budget + 1);
    }
}
