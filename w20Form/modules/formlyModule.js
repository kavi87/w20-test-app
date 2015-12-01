define([
    '{angular}/angular',
    '{angular-resource}/angular-resource'

], function (angular) {
    'use strict';

    var module = angular.module('formlyModule', ['ngResource']);

    module.factory('provinceFactory', function () {
        return {
            list: function () {
                return [
                    {
                        name: 'Alberta',
                        value: 'alberta',
                        group: 'A-B'
                    },
                    {
                        name: 'British Columbia',
                        value: 'british_columbia',
                        group: 'A-B'
                    },
                    {
                        name: 'Manitoba',
                        value: 'manitoba',
                        group: 'M-N'
                    },
                    {
                        name: 'New Brunswick',
                        value: 'new_brunswick',
                        group: 'M-N',
                        selected: true
                    },
                    {
                        name: 'Newfoundland and Labrador',
                        value: 'newfoundland_and_labrador',
                        group: 'M-N'
                    },
                    {
                        name: 'Northwest Territories',
                        value: 'northwest_territories',
                        group: 'M-N'
                    },
                    {
                        name: 'Nova Scotia',
                        value: 'nova_scotia',
                        group: 'M-N'
                    },
                    {
                        name: 'Nunavut',
                        value: 'nunavut',
                        group: 'M-N'
                    },
                    {
                        name: 'Ontario',
                        value: 'ontario',
                        group: 'O-Y'
                    },
                    {
                        name: 'Prince Edward Island',
                        value: 'prince_edward_island',
                        group: 'O-Y'
                    },
                    {
                        name: 'Quebec',
                        value: 'quebec',
                        group: 'O-Y'
                    },
                    {
                        name: 'Saskatchewan',
                        value: 'saskatchewan',
                        group: 'O-Y'
                    },
                    {
                        name: 'Yukon',
                        value: 'Yukon',
                        group: 'O-Y'
                    }
                ]
            }
        }
    });

    module.controller('FormlyController', ['$scope', 'provinceFactory', 'FormsService', function ($scope, provinceFactory, formsService) {

        //formsService.validation.addStringMessage('required', 'application.form.validation.required');
        //formsService.validation.addTemplateOptionValueMessage('minlength', 'minlength', 'Minimum length is  ', '', 'Too short');

        formsService.config.setType({
            name: 'title',
            template: '<h1> Form title </h1>'
        });

       /* formsService.validation.messages.required = function ($viewValue, $modelValue, scope) {
            return scope.options.templateOptions.label + ' is required';
        };*/

        $scope.userForm = {
            model: {},
            fields: [
                {
                    type: 'title'
                },
                {
                    template: '<h1> Register </h1>'
                },
                {
                    key: 'id',
                    type: 'text',
                    templateOptions: {
                        label: 'Id',
                        placeholder: 'Id',
                        required: true,
                        minlength: 6
                    }
                },
                {
                    key: 'hat',
                    type: 'select',
                    templateOptions: {
                        label: 'Hat',
                        placeholder: 'Hat',
                        required: true,
                        options: [
                            {
                                name: 'Small hat',
                                value: 'smhat',
                                group: 'Small'
                            },
                            {
                                name: 'Big hat',
                                value: 'bghat',
                                group: 'Big'
                            }
                        ]

                    }
                },
                {
                    key: 'email',
                    type: 'email',
                    templateOptions: {
                        label: 'Email',
                        placeholder: 'Email',
                        required: true
                    }
                },
                {
                    key: 'number',
                    type: 'number',
                    templateOptions: {
                        label: 'Number',
                        placeholder: 'Number',
                        required: true
                    }
                },
                {
                    key: 'url',
                    type: 'url',
                    templateOptions: {
                        label: 'URL',
                        placeholder: 'URL',
                        required: true
                    }
                },
                {
                    key: 'credentials',
                    fieldGroup: [
                        {
                            key: 'login',
                            type: 'text',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'application.form1.label.name',
                                placeholder: 'custom.link.key',
                                required: true
                            }
                        },
                        {
                            key: 'password',
                            type: 'password',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Password',
                                placeholder: 'password',
                                required: true
                            },
                            expressionProperties: {
                                'templateOptions.disabled': '!model.login' // disabled when username is blank
                            }
                        }
                    ]
                },
                {
                    key: 'informations',
                    fieldGroup: [
                        {
                            key: 'birthday',
                            type: 'date',
                            templateOptions: {
                                label: 'Birthday',
                                required: false
                            }

                        },
                        {
                            key: 'sex',
                            type: 'radio',
                            className: 'col-md-6',
                            templateOptions: {
                                name: 'radioGroup',
                                label: 'Male',
                                value: 'M',
                                required: false
                            }
                        },
                        {
                            key: 'sex',
                            type: 'radio',
                            className: 'col-md-6',
                            templateOptions: {
                                name: 'radioGroup',
                                label: 'Female',
                                value: 'F',
                                required: false
                            }
                        },
                        {
                            key: 'married',
                            type: 'checkbox',
                            templateOptions: {
                                label: 'Married (y/n)',
                                required: false
                            }
                        },
                        {
                            key: 'children',
                            type: 'number',
                            templateOptions: {
                                label: 'Number of children',
                                required: false
                            },
                            expressionProperties: {
                                'templateOptions.disabled': '!model.married'
                            }


                        },
                        {
                            key: 'province-single',
                            type: 'select',
                            templateOptions: {
                                label: 'Select one province',
                                options: provinceFactory.list()
                            }
                        },
                        {
                            key: 'province-multiple',
                            type: 'select',
                            templateOptions: {
                                label: 'Select many provinces',
                                options: provinceFactory.list(),
                                multiple: true
                            }
                        }
                    ]
                },
                {
                    key: 'about',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Few words about you',
                        required: false,
                        rows: 10
                    }
                },
                {
                    key: 'animal',
                    type: 'text',
                    templateOptions: {
                        label: 'Animal'
                    }
                }
            ]
        };

        $scope.userForm.submit = function () {
            alert('submit: ' + JSON.stringify($scope.userForm.model));
        };

    }]);


    return {
        angularModules: ['formlyModule']
    };
})
;
