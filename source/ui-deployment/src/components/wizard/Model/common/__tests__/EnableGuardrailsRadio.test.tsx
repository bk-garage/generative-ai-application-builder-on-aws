/**********************************************************************************************************************
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.                                                *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 **********************************************************************************************************************/
import { mockFormComponentCallbacks, cloudscapeRender } from '@/utils';
import EnableGuardrailsRadio from '../EnableGuardrailsRadio';

describe('EnableGuardrails', () => {
    test('renders', () => {
        const mockModelData = {
            enableGuardrails: false
        };
        const callbacks = mockFormComponentCallbacks();

        const { cloudscapeWrapper } = cloudscapeRender(
            <EnableGuardrailsRadio modelData={mockModelData} {...callbacks} />
        );

        const radioGroup = cloudscapeWrapper.findRadioGroup('[data-testid="enable-guardrails-radio-group"]');
        expect(radioGroup?.getElement()).toBeDefined();
        expect(radioGroup?.findInputByValue('no')?.getElement().checked).toBeTruthy();

        radioGroup?.findInputByValue('yes')?.getElement().click();
        expect(callbacks.onChangeFn).toHaveBeenCalledWith({
            enableGuardrails: true,
            guardrailIdentifier: '',
            guardrailVersion: ''
        });
    });
});
