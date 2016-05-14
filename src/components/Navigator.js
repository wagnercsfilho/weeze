class Emitter {
    constructor() {
        this.listenners = {};
    }
    emit(name, ...args) {
        this.listenners[name].apply(null, args);
    }
    on(name, fn) {
        this.listenners[name] = fn;
    }
}

class Navigator {

    constructor(components) {
        this.components = components;
        this.currentPage = null;
        this.prevPage = null;
        this.initialView = null;
        this.emitter = new Emitter();
    }

    install(Vue, options) {
        var that = this;

        Vue.prototype.$pushPage = function(view, params) {
            if (that.beforeEachFn) {
                that.beforeEachFn.call(this, view, function(){
                    that.emitter.emit('pushPage', view, params);
                    if (that.currentPage) {
                        that.prevPage = that.currentPage;
                    }
                    that.currentPage = view;
                });
            }
            else {
                that.emitter.emit('pushPage', view, params);

                if (that.currentPage) {
                    that.prevPage = that.currentPage;
                }
                that.currentPage = view;
            }
        }

        Vue.prototype.$closeCurrentPage = function() {
            that.emitter.emit('closeCurrentPage');
        }

        Vue.component('views', {
            data: function() {
                    return {
                        views: []
                    }
            },
            template: '<component v-for="view in views" :params="view.params" :is="view.component"></component>',
            components: that.components,
            created: function() {
                var self = this;

                that.emitter.on('pushPage', function(view, params) {
                  console.log(view, params)
                    self.views.push({
                        component: view,
                        params: params
                    });
                });

                that.emitter.on('closeCurrentPage', function() {
                    self.views.map((v, index) => {
                        if (v.component == that.currentPage) {
                            that.currentPage = that.prevPage;
                            self.views.splice(index, 1);
                        }
                    });
                });

                self.$pushPage(that.initialView, null);
            }
        });
    }

    setInitialView(name) {
        this.initialView = name;
    }

    beforeEach(fn) {
        this.beforeEachFn = fn;
    }

}

export default Navigator;
